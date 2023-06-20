#!/bin/bash
my_array=(/home/kris/wallpapers/*)
wal -i ${my_array[$(( $RANDOM % ${#my_array[@]}))]}

