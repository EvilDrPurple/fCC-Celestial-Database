#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username:"
read USERNAME

GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username = '$USERNAME'")

if [[ -z $GAMES_PLAYED ]]
then
  echo "Welcome, $USERNAME! It looks like this is your first time here."
  Q=$($PSQL "INSERT INTO users (username) VALUES ('$USERNAME')")
  GAMES_PLAYED=0
else
  BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username = '$USERNAME'")
  echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

SECRET_NUMBER=$(( RANDOM % 1000 + 1 ))
echo "Guess the secret number between 1 and 1000:"
read GUESS
NUMBER_OF_GUESSES=1

while [[ $GUESS != $SECRET_NUMBER ]]
do
  (( NUMBER_OF_GUESSES++ ))

  while [[ ! $GUESS =~ ^[0-9]+$ ]]
  do
    echo "That is not an integer, guess again:"
    read GUESS
  done

  if [[ $GUESS -gt $SECRET_NUMBER ]]
  then
    echo "It's lower than that, guess again:"
  elif [[ $GUESS -lt $SECRET_NUMBER ]]
  then
    echo "It's higher than that, guess again:"
  fi

  read GUESS
done

echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
(( GAMES_PLAYED++ ))

if [[ -z $BEST_GAME || $NUMBER_OF_GUESSES -lt $BEST_GAME ]]
then
  Q=$($PSQL "UPDATE users SET games_played = $GAMES_PLAYED, best_game = $NUMBER_OF_GUESSES WHERE username = '$USERNAME'")
else
  Q=$($PSQL "UPDATE users SET games_played = $GAMES_PLAYED WHERE username = '$USERNAME'")
fi

