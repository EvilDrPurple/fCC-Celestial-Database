#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username:"
read USERNAME

# get games played by user
GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username = '$USERNAME'")

# if new user
if [[ -z $GAMES_PLAYED ]]
then
  echo "Welcome, $USERNAME! It looks like this is your first time here."
  # insert username
  INSERT_USER=$($PSQL "INSERT INTO users (username) VALUES ('$USERNAME')")
  GAMES_PLAYED=0
else
  # get user's best game
  BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username = '$USERNAME'")
  echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

# generate secret number
SECRET_NUMBER=$(( RANDOM % 1000 + 1 ))
echo "Guess the secret number between 1 and 1000:"
read GUESS
NUMBER_OF_GUESSES=1

# while the secret number has not been guessed
while [[ $GUESS != $SECRET_NUMBER ]]
do
  (( NUMBER_OF_GUESSES++ ))
  
  # check if guess is an integer
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

# if new record
if [[ -z $BEST_GAME || $NUMBER_OF_GUESSES -lt $BEST_GAME ]]
then
  # update games played and best game
  UPDATE_GAMES_PLAYED=$($PSQL "UPDATE users SET games_played = $GAMES_PLAYED, best_game = $NUMBER_OF_GUESSES WHERE username = '$USERNAME'")
else
  # update games plaed
  UPDATE_GAMES_PLAYED=$($PSQL "UPDATE users SET games_played = $GAMES_PLAYED WHERE username = '$USERNAME'")
fi
