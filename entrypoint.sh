#!/bin/sh

echo " Starting worker"
npx nodemon worker.js &

sleep 5

echo " Starting producer"
npx nodemon producer.js &

wait
