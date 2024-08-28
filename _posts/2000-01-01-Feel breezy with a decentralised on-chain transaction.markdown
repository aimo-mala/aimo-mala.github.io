---
layout: post
title:  "Feel breezy with a decentralised on-chain transaction"
date:   2024-01-01 18:05:55 +0300
image:  cover_w3.jpg
tags:   Startup, web3.0
---

Building a decentralised exchange app is meant to be more lean, intuitive and yet to offer a streamlined experience, which is not only for the existing DeFi/Wallet users but also to those newcomers who just delve into crypto space. The experience challenge in web 3.0 is more demanding ever than it was for web 2.0, hence, to disambiguate the piles of uncertainty in a journey from exchange rate discovery to order has been one of the key business interests.

Disambiguate, how? First, let's frame a challenge.

## The challenge 

One of the first thing you'd do as a team is to establish what major issue is? who are we going to serve? and how are we going to serve. In this case, it's evident that a customer meets several frictions from quote, review, permit to order submitted. Next, let's brake down into chunk of user stories as follows.


* Instant multi-chain swap - the final price should be the same as expected
* Easy swap - a easy swap & approval user interface
* Gasless - easy & enjoy ERC20 tokens gasless swap
* MEV protection & Rebates.

By far, it sounds like a direct approach in the process that you just need to sort out the product list as you've gathered and design it. The truth is, there's a strong resistance that team does not want to a headlong plunge into UI revamp as a result of the technical legacy, and this is the challenge where lies.


## Principles & UI solutions


Too soon? Not if the 'pain point' has been known that's impossible to get the job done without dissecting the UI problems the first.

A well-designed UI layout can improve readability, address important information, and create a visually appealing user interface, hence, the strategic use of UI principles can: 

#### :::tip Enhancing readability

A typical trading screen contains a lot of data, from Token pricing and buy/sell quantity to real-time exchange rate and trading fee. The existing of trading screen is lacking of intuition, for example, the existing trading layout is horizontally that clashes with a user who usually navigating info vertically, so the revisit the trading layout is imperative.


#### :::tip Building a visually appealing interface.

An aesthetic UI can enhance user experience and encourage regular use. Harmonious colour schemes, and some basic laws that can help a user understand how trading works. This is especially important for crypto newcomers, for example, for existing wallet users can often see different colours on buttons, tooltips, modals etc across mobile and website, which can hamper for a user who usually trades across platform. 


#### :memo: Categorisation & highlight key information

Card/colour can be used to categorised and differentiate sections a trading/order review screen, for example, the existing order review is cluttered with information from received token quantity to gas fee and trading fee.


## Key components & guidelines

#### Tokens 

When designing the token section of your wallet, the main goal is to clearly present your assets and transaction history. Using cards with neutral background to contain related Token attributes, such as sell/buy quantity. For managing chain and transaction, using colour to present different types of transactions can be very helpful.

#### Permit & approval

For permit & approval, the app can display a series of interactions through modals. Using progress indicator can help a user understand where they're at and what the next step is. A well-design conversation flow is critical here to avoid the confusion. 

#### Fee

Gas fees work as payment for network validators for processing transactions and securing blockchain. Using colour-code alerts/texts can represent the low/high trading metrics depending on trading complexity.

#### Payment & transaction history

Payment and transaction history is a critical aspect of crypto trading. Using colour-coded messages, such as, pending, completed, failed can reduce cognitive load and quickly focus on the key information.


#### Chain/Account 

Chain/Account is especially important for multi-chain swap. A consistent behaviour of switching account/chain ensures that users can easily switch between different chain/accounts. Using its original chain/token colour can help easily to differentiate quickly. This approach is especially effective in dApps where users usually trade with their assets directly stored from their wallet.

![)]({{ site.baseurl }}/images/oken_banner_1.png)
*It contributes the portion of revenues with a multi-chain feature supported / Illustrated by kisscx.com/*

## Recap 

These UI principles plays a vital role in the UIUX of the effective web3.0 app. This improves readability, pays attention to the highlighted information, and effectively delivers messages. With this practice can turn the complex data into clear and actionable information, more importantly, a clear UI can help the users learn quickly and feeling lost in the crypto space.





