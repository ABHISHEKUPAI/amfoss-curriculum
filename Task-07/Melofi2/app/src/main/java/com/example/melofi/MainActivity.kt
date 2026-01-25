package com.example.melofi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.melofi.navigation.AppNavGraph
import com.example.melofi.screens.home.HomeScreen
import com.example.melofi.screens.home.Song
import com.example.melofi.screens.player.PlayerScreen
import com.example.melofi.ui.theme.MelofiTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            AppNavGraph()
        }

    }
}

