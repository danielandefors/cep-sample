#!/bin/sh

# Run this script to enable debugging unsigned extensions
# in Illustrator CC 2014 and Illustrator CC 2015

# Enable debug mode for Illustrator CC 2014
defaults write com.adobe.CSXS.5 PlayerDebugMode 1

# Enable debug mode for Illustrator CC 2015
defaults write com.adobe.CSXS.6 PlayerDebugMode 1
