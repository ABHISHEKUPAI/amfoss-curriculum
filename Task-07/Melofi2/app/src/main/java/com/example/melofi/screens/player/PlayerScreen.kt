package com.example.melofi.screens.player

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.example.melofi.R
import com.example.melofi.screens.home.Song

@Composable
fun PlayerScreen(navController: NavController,
                 song: Song) {

    var isPlaying by remember { mutableStateOf(false) }
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .padding(25.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {



        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.Start
        ) {
            IconButton(
                onClick = {
                    navController.popBackStack()
                }
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.back),
                    contentDescription = "Back",
                    tint = Color.White,
                    modifier = Modifier.size(size = 80.dp)
                )
            }
        }
        Spacer(modifier = Modifier.height(80.dp))

        Image(
            painter = painterResource(id = R.drawable.song_icon),
            contentDescription = "Song Image",
            modifier = Modifier.size(220.dp)
        )

        Spacer(modifier = Modifier.height(25.dp))

        Text(
            text = song.title,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White
        )

        Spacer(modifier = Modifier.height(5.dp))

        Text(
            text = song.artist,
            fontSize = 15.sp,
            color = Color.LightGray
        )

        Spacer(modifier = Modifier.height(50.dp))

        Row(
            horizontalArrangement = Arrangement.spacedBy(30.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(onClick = {  }) {
                Icon(
                    painter = painterResource(id = R.drawable.left_arrow),
                    contentDescription = "Previous",
                    tint = Color.White ,
                    modifier = Modifier.size(60.dp)

                )
            }
            IconButton(onClick = { isPlaying = !isPlaying }) {
                Icon(
                    painter = painterResource(
                        id = if (isPlaying)
                            R.drawable.pause
                        else
                            R.drawable.play
                    ),
                    contentDescription = "Play Pause",
                    tint = Color.White,
                    modifier = Modifier.size(60.dp)
                )
            }
            IconButton(onClick = { }) {
                Icon(
                    painter = painterResource(id = R.drawable.right_arrow),
                    contentDescription = "Next",
                    tint = Color.White ,
                    modifier = Modifier.size(60.dp)
                )
            }

            IconButton(onClick = {  }) {
                Icon(
                    painter = painterResource(id = R.drawable.playlist),
                    contentDescription = "Playlist",
                    tint = Color.White
                )
            }
        }
    }

}
