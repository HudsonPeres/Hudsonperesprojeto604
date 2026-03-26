const level2Questions = [
  {
    text: "Which sentence is in the present perfect tense?",
    options: ["I went to Paris", "I have been to Paris", "I go to Paris", "I am going to Paris"],
    correct: "I have been to Paris"
  },
  {
    text: "What does the idiom 'break the ice' mean?",
    options: ["Break something frozen", "Start a conversation", "Get angry", "Finish a task"],
    correct: "Start a conversation"
  },
  {
    text: "Which sentence uses the second conditional correctly?",
    options: ["If I win, I would be happy", "If I won, I would be happy", "If I win, I am happy", "If I won, I will be happy"],
    correct: "If I won, I would be happy"
  },
  {
    text: "How do you politely decline an invitation?",
    options: ["No", "I don't want to", "I'd love to, but I'm busy", "Maybe later"],
    correct: "I'd love to, but I'm busy"
  },
  {
    text: "What is the difference between 'I used to smoke' and 'I smoked'?",
    options: ["No difference", "Used to emphasizes a past habit, smoked is a completed action", "Smoked is past habit", "Used to is present"],
    correct: "Used to emphasizes a past habit, smoked is a completed action"
  },
  {
    text: "Which sentence is in the passive voice?",
    options: ["The chef cooked the meal", "The meal was cooked by the chef", "The chef is cooking", "The meal cooks"],
    correct: "The meal was cooked by the chef"
  },
  {
    text: "What does the expression 'hit the nail on the head' mean?",
    options: ["Make a mistake", "Describe exactly what is wrong", "Build something", "Get hurt"],
    correct: "Describe exactly what is wrong"
  },
  {
    text: "Which sentence uses 'since' correctly?",
    options: ["I have been here since two hours", "I have been here since 2020", "I am here since 2020", "I was here since 2020"],
    correct: "I have been here since 2020"
  },
  {
    text: "How do you ask for a recommendation at a restaurant?",
    options: ["What is good here?", "Give me food", "I want something", "Tell me the menu"],
    correct: "What is good here?"
  },
  {
    text: "What is the meaning of 'I'm on cloud nine'?",
    options: ["I'm sad", "I'm extremely happy", "I'm confused", "I'm tired"],
    correct: "I'm extremely happy"
  },
  {
    text: "Which sentence uses the correct modal verb for obligation?",
    options: ["You must wear a uniform", "You can wear a uniform", "You might wear a uniform", "You may wear a uniform"],
    correct: "You must wear a uniform"
  },
  {
    text: "What does 'by the way' mean?",
    options: ["A direction", "Incidentally or used to change the subject", "A method", "A place"],
    correct: "Incidentally or used to change the subject"
  },
  {
    text: "Which sentence is an example of the future perfect tense?",
    options: ["I will finish by tomorrow", "I will have finished by tomorrow", "I am finishing tomorrow", "I finish tomorrow"],
    correct: "I will have finished by tomorrow"
  },
  {
    text: "How do you express a preference politely?",
    options: ["I want this", "I prefer this, if that's okay", "Give me this", "This is better"],
    correct: "I prefer this, if that's okay"
  },
  {
    text: "What is the meaning of 'break up'?",
    options: ["To separate into pieces", "To end a relationship", "To stop working", "All of the above"],
    correct: "All of the above"
  },
  {
    text: "Which sentence uses the correct relative pronoun?",
    options: ["The man who called you is here", "The man which called you is here", "The man whom called you is here", "The man whose called you is here"],
    correct: "The man who called you is here"
  },
  {
    text: "What does 'I'll get back to you' mean?",
    options: ["I will return to your location", "I will respond later", "I will give you something", "I will call you back"],
    correct: "I will respond later"
  },
  {
    text: "Which sentence uses 'so' and 'such' correctly?",
    options: ["It was so beautiful day", "It was such beautiful day", "It was such a beautiful day", "It was so a beautiful day"],
    correct: "It was such a beautiful day"
  },
  {
    text: "How do you ask someone to speak more slowly?",
    options: ["Speak slow", "Can you speak more slowly, please?", "Talk less fast", "Slowly please"],
    correct: "Can you speak more slowly, please?"
  },
  {
    text: "What does the phrasal verb 'run out of' mean?",
    options: ["To exercise", "To have no more of something", "To leave quickly", "To compete"],
    correct: "To have no more of something"
  },
  {
    text: "Which sentence is in the past continuous?",
    options: ["I watched TV", "I was watching TV", "I have watched TV", "I watch TV"],
    correct: "I was watching TV"
  },
  {
    text: "What is the meaning of 'cost an arm and a leg'?",
    options: ["To be cheap", "To be very expensive", "To be dangerous", "To be painful"],
    correct: "To be very expensive"
  },
  {
    text: "Which sentence uses 'enough' correctly?",
    options: ["I have money enough", "I have enough money", "I have money enough to buy", "Enough money I have"],
    correct: "I have enough money"
  },
  {
    text: "How do you apologize for being late?",
    options: ["Sorry for late", "I'm sorry for being late", "Late sorry", "Forgive my late"],
    correct: "I'm sorry for being late"
  },
  {
    text: "What is the difference between 'few' and 'a few'?",
    options: ["Few means some, a few means not many", "Few means almost none, a few means some", "They mean the same", "Few is for countable nouns only"],
    correct: "Few means almost none, a few means some"
  },
  {
    text: "Which sentence uses the third conditional?",
    options: ["If I studied, I would pass", "If I had studied, I would have passed", "If I study, I will pass", "If I studied, I will pass"],
    correct: "If I had studied, I would have passed"
  },
  {
    text: "What does 'keep in touch' mean?",
    options: ["Stay physically close", "Maintain communication", "Touch something", "Hold hands"],
    correct: "Maintain communication"
  },
  {
    text: "Which sentence uses 'wish' correctly for a present situation?",
    options: ["I wish I am rich", "I wish I were rich", "I wish I was rich", "I wish I be rich"],
    correct: "I wish I were rich"
  },
  {
    text: "How do you make a suggestion?",
    options: ["You must do this", "Why don't we go to the movies?", "Do this", "Go to movies"],
    correct: "Why don't we go to the movies?"
  },
  {
    text: "What does the phrasal verb 'look forward to' mean?",
    options: ["To search for something", "To anticipate with pleasure", "To see ahead", "To wait"],
    correct: "To anticipate with pleasure"
  },
  {
    text: "Which sentence uses the correct order of adjectives?",
    options: ["A red big car", "A big red car", "A car big red", "Big a red car"],
    correct: "A big red car"
  },
  {
    text: "What is the meaning of 'under the weather'?",
    options: ["Feeling sad", "Feeling sick", "Feeling cold", "Feeling lost"],
    correct: "Feeling sick"
  },
  {
    text: "Which sentence uses 'would rather' correctly?",
    options: ["I would rather to stay home", "I would rather stay home", "I would rather staying home", "I would rather stayed home"],
    correct: "I would rather stay home"
  },
  {
    text: "How do you give advice politely?",
    options: ["You should see a doctor", "See a doctor", "You must see a doctor", "Go to doctor"],
    correct: "You should see a doctor"
  },
  {
    text: "What is the difference between 'say' and 'tell'?",
    options: ["Say is used with an object, tell is used without", "Tell is used with an object, say is used without or with 'to'", "They are interchangeable", "Say is for questions, tell is for statements"],
    correct: "Tell is used with an object, say is used without or with 'to'"
  },
  {
    text: "Which sentence uses 'although' correctly?",
    options: ["Although it was raining, we went out", "Although it was raining but we went out", "It was raining, although we went out", "We went out although it was raining but"],
    correct: "Although it was raining, we went out"
  },
  {
    text: "What does 'give someone a hand' mean?",
    options: ["Slap someone", "Help someone", "Greet someone", "Hire someone"],
    correct: "Help someone"
  },
  {
    text: "Which sentence uses the present perfect continuous?",
    options: ["I have worked here for five years", "I have been working here for five years", "I am working here for five years", "I work here for five years"],
    correct: "I have been working here for five years"
  },
  {
    text: "How do you politely interrupt a conversation?",
    options: ["Stop talking", "Excuse me, sorry to interrupt", "Hey, listen", "Wait a minute"],
    correct: "Excuse me, sorry to interrupt"
  },
  {
    text: "What is the meaning of 'it's not rocket science'?",
    options: ["It's very difficult", "It's not complicated", "It's about space", "It's a science experiment"],
    correct: "It's not complicated"
  },
  {
    text: "Which sentence uses 'can' and 'be able to' correctly?",
    options: ["I can to swim", "I am able swim", "I can swim", "I am able to swim"],
    correct: "I can swim"
  },
  {
    text: "What does 'make up your mind' mean?",
    options: ["Create a story", "Decide something", "Apply makeup", "Think hard"],
    correct: "Decide something"
  },
  {
    text: "Which sentence uses the correct preposition for time?",
    options: ["I work in Monday", "I work at Monday", "I work on Monday", "I work to Monday"],
    correct: "I work on Monday"
  },
  {
    text: "How do you express uncertainty?",
    options: ["I'm sure", "I'm not sure", "I know", "Definitely"],
    correct: "I'm not sure"
  },
  {
    text: "What does the phrasal verb 'come across' mean?",
    options: ["To cross a street", "To find by chance", "To arrive", "To approach"],
    correct: "To find by chance"
  },
  {
    text: "Which sentence uses the zero conditional correctly?",
    options: ["If you heat water, it boils", "If you heat water, it will boil", "If you heated water, it would boil", "If you heat water, it would boil"],
    correct: "If you heat water, it boils"
  },
  {
    text: "What is the meaning of 'to be on time'?",
    options: ["To be early", "To be punctual", "To be late", "To be free"],
    correct: "To be punctual"
  },
  {
    text: "Which sentence uses the correct verb pattern?",
    options: ["I enjoy to read", "I enjoy reading", "I enjoy read", "I enjoy to reading"],
    correct: "I enjoy reading"
  },
  {
    text: "How do you ask for clarification?",
    options: ["What?", "Could you please repeat that?", "Again", "Say it"],
    correct: "Could you please repeat that?"
  }
];
export default level2Questions;