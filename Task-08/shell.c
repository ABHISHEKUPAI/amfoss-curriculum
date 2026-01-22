#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include <signal.h>

#define maxinp 1024
#define maxarg 64
#define maxbg 20

pid_t backgroundProcesses[maxbg];
int backgroundCount = 0;
pid_t foregroundProcess = -1;

void ctrlc(int sig) {
    printf("\nBackground processes:\n");
    for (int i = 0; i < backgroundCount; i++) {
        printf("PID: %d\n", backgroundProcesses[i]);
    }
    printf("myshell>>>> ");
    fflush(stdout);
}

void ctrlz(int sig) {
    if (foregroundProcess > 0) {
        kill(foregroundProcess, SIGTSTP);
        printf("\nForeground process suspended\n");
    }
    printf("\nmyshell>>>> ");
    fflush(stdout);
}

int main() {
    char input[maxinp];
    char *argv[maxarg];

    signal(SIGINT, ctrlc);
    signal(SIGTSTP, ctrlz);

    while (1) {
        printf("myshell>>>> ");
        fflush(stdout);

        if (fgets(input,maxinp, stdin) == NULL) {
            printf("\nExiting shell...\n");
            break;
        }

        input[strcspn(input, "\n")] = '\0';

        
        int argc = 0;

        for (int i = 0; i < maxarg; i++)
            argv[i] = NULL;

        char *token = strtok(input, " ");
        while (token != NULL && argc < maxarg - 1) {
            argv[argc++] = token;
            token = strtok(NULL, " ");
        }
        argv[argc] = NULL;

        if (argc == 0)
            continue;

        if (strcmp(argv[0], "exit") == 0) {
            printf("Exiting shell...\n");
            break;
        }

        if (strcmp(argv[0], "pwd") == 0) {
            char cwd[1024];
            if (getcwd(cwd, sizeof(cwd)) != NULL)
                printf("%s\n", cwd);
            else
                perror("pwd");
            continue;
        }

        if (strcmp(argv[0], "cd") == 0) {
            if (argv[1] == NULL)
                printf("cd: missing argument\n");
            else if (chdir(argv[1]) != 0)
                perror("cd");
            continue;
        }

        int background = 0;
        if (argc > 0 && strcmp(argv[argc - 1], "&") == 0) {
            background = 1;
            argv[argc - 1] = NULL;
        }


        pid_t pid = fork();

        if (pid < 0) {
            perror("fork");
            continue;
        }

        if (pid == 0) {
            
            signal(SIGINT, SIG_DFL);
            signal(SIGTSTP, SIG_DFL);

            if (execvp(argv[0], argv) == -1) {
                perror("execvp");
                exit(EXIT_FAILURE);
            }
        } 
        else {
          
            if (background) {
                if (backgroundCount < maxbg) {
                    backgroundProcesses[backgroundCount++] = pid;
                    printf("Started background process PID %d\n", pid);
                }
            } else {
                foregroundProcess = pid;
                waitpid(pid, NULL, 0);
                foregroundProcess = -1;
            }
        }
    }

    return 0;
}
