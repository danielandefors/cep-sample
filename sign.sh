#!/bin/sh

# Use this script to sign the extension.
# The script assumes that you have installed ZXPSignCmd, and that it is available on the PATH.
# Get it here: https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD

if [ $# -ne 2 ]; then
  echo "usage: ./sign.sh <cert> <password>"
  exit 1
fi

OUTFILE="cep-sample.zxp"
P12CERT=$1
P12PASSWORD=$2

if [ ! -f $P12CERT ]; then
  echo "cert not found: $P12CERT"
  exit 1
fi

# clean up old extension
if [ -f $OUTFILE ]; then
  rm $OUTFILE
fi

# package and sign the extension
ZXPSignCmd -sign app $OUTFILE $P12CERT $P12PASSWORD -tsa "https://timestamp.geotrust.com/tsa"

