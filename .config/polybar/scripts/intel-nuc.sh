#!/bin/bash

######################################################
## This is for rattb0y's Intel NUC 2 Monitor setup  ##
######################################################

# Terminate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use
# polybar-msg cmd quit

 primary=$(xrandr --query |grep primary | cut -d" " -f1)
 
if type "xrandr"; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar --reload bar &
  done
else
  polybar --reload bar &
fi

echo "Polybar launched..."
