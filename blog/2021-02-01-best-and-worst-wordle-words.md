---
slug: best-and-worst-wordle-words
title: Best and Worst Wordle Words
author: Taylor Reece
author_url: https://twitter.com/taylorreeceSD
author_image_url: https://avatars1.githubusercontent.com/u/3622586?s=400&u=92d81adf0d87e31ac26d0f335e154697c2e5d04a&v=4
tags: [wordle, guesses]
description: What are the best (and worst) first words to guess in Wordle?
---

[Wordle](https://www.powerlanguage.co.uk/wordle/) is the word game craze that gained extreme popularity in January of 2021.

The game is pretty simple: guess a daily 5-letter word.
You have six chances.
If you guess incorrectly, the letters in your guess are highlighted green or yellow:

- Green indicates that the letter was correct, and in the right position
- Yellow indicates that the letter appears in the word, but not in that position
- All incorrect letters appear in gray

  ![Wordle screenshot](/img/wordle-screenshot.png)

In this post, let's look at the best and worst words to start with in Wordle.

## My Wordle Strategy

Obviously some guesses are better than others.
Friends on Twitter or Facebook have recommended words like `audio` or `rinse`, since those contain very common letters.
That makes sense - it's helpful to use words that yield a lot of yellow or green letters.
A guess like `xylyl` (which is a [real word](https://www.merriam-webster.com/medical/xylyl)!) will likely result in an all-gray, largely wasted guess.

So... what makes a good guess?
In my opinion, a good guess not only gives you some correct letters, but _eliminates_ the largest set of possible solutions.
It turns out, those goals (lots of correct letters, eliminates lots of possible solutions) go hand-in-hand.

## Guess and Solution Words

If you look at Wordle's source code, there are two sets of words: possible solutions, and a dictionary of valid guesses you can make.
I've posted the [possible solutions]
