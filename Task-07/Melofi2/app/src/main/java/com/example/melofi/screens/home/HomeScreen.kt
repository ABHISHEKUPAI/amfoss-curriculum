package com.example.melofi.screens.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.melofi.R
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.navigation.NavHostController

data class Song(
    val title: String,
    val artist: String
)

val songList = listOf(
    Song("Believer", "Imagine Dragons"),
    Song("Faded", "Alan Walker"),
    Song("Shape of You", "Ed Sheeran"),
    Song("Believer", "Imagine Dragons"),
    Song("Faded", "Alan Walker"),
    Song("Shape of You", "Ed Sheeran"),
    Song("Levitating", "Dua Lipa")
)

@Composable
fun HomeScreen(navController: NavHostController) {

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
    ) {

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top=80.dp),
            contentAlignment = Alignment.Center

        ){
            Text(
                text = "Home",
                fontSize = 30.sp,
                color = Color.White,
                fontWeight = FontWeight.Bold,

            )

        }
        Spacer(modifier = Modifier.height(25.dp))



        LazyColumn {
            items(songList) { song ->
                SongItem(
                    song = song,
                    onClick = {
                        navController.navigate(
                            "player/${song.title}/${song.artist}"
                        )
                    }
                )
            }
        }
        Spacer(modifier = Modifier.height(25.dp))

    }
}
@Composable
fun SongItem(
    song: Song,
    onClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .padding(3.dp)
            .background(Color.Gray),
        verticalAlignment = Alignment.CenterVertically
    ) {

        Image(
            painter = painterResource(id = R.drawable.song_icon),
            contentDescription = "Song image",
            modifier = Modifier
                .size(80.dp)
        )

        Spacer(modifier = Modifier.width(50.dp))

        Column {
            Text(
                text = song.title,
                fontSize = 18.sp,
                color = Color.White,

            )
            Text(
                text = song.artist,
                fontSize = 14.sp,
                color = Color.White,
            )
        }
    }
}
