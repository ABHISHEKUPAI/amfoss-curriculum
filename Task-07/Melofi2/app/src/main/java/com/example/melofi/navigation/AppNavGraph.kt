package com.example.melofi.navigation


import androidx.compose.runtime.Composable
import androidx.navigation.compose.*
import com.example.melofi.screens.home.HomeScreen
import com.example.melofi.screens.player.PlayerScreen
import com.example.melofi.screens.home.Song

@Composable
fun AppNavGraph() {

    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = "home"
    ) {

        composable("home") {
            HomeScreen(navController)
        }

        composable(
            route = "player/{title}/{artist}"
        ) { backStackEntry ->

            val title =
                backStackEntry.arguments?.getString("title") ?: ""
            val artist =
                backStackEntry.arguments?.getString("artist") ?: ""

            PlayerScreen(
                navController = navController,
                song = Song(title, artist)
            )

        }
    }
}
