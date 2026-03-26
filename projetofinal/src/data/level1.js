const level1Questions = [
  {
    text: "What is the correct way to greet someone in the morning?",
    options: ["Good night", "Good morning", "Good evening", "Goodbye"],
    correct: "Good morning"
  },
  {
    text: "How do you say 'obrigado' in English?",
    options: ["Please", "Sorry", "Thank you", "Hello"],
    correct: "Thank you"
  },
  {
    text: "What is the past tense of 'go'?",
    options: ["Goed", "Went", "Gone", "Going"],
    correct: "Went"
  },
  {
    text: "Which sentence is correct?",
    options: ["She go to school", "She goes to school", "She going to school", "She are go to school"],
    correct: "She goes to school"
  },
  {
    text: "What does 'I'm sorry' mean?",
    options: ["Thank you", "Excuse me", "Apologizing", "Hello"],
    correct: "Apologizing"
  },
  {
    text: "How do you introduce yourself?",
    options: ["My name is John", "He is John", "She is John", "You are John"],
    correct: "My name is John"
  },
  {
    text: "What is the opposite of 'big'?",
    options: ["Large", "Huge", "Small", "Tall"],
    correct: "Small"
  },
  {
    text: "Which word is a color?",
    options: ["Happy", "Blue", "Fast", "Loud"],
    correct: "Blue"
  },
  {
    text: "What is the plural of 'child'?",
    options: ["Childs", "Childes", "Children", "Child"],
    correct: "Children"
  },
  {
    text: "How do you ask someone's name?",
    options: ["What is your name?", "How is your name?", "Where is your name?", "Who is your name?"],
    correct: "What is your name?"
  },
  {
    text: "Which sentence is in the present continuous?",
    options: ["I eat an apple", "I am eating an apple", "I ate an apple", "I will eat an apple"],
    correct: "I am eating an apple"
  },
  {
    text: "What does 'excuse me' mean?",
    options: ["Getting attention or apologizing", "Thank you", "You're welcome", "Goodbye"],
    correct: "Getting attention or apologizing"
  },
  {
    text: "What is the correct possessive form?",
    options: ["The book of John", "Johns book", "John's book", "John book"],
    correct: "John's book"
  },
  {
    text: "How do you say 'até logo' in English?",
    options: ["Good morning", "See you later", "Hello", "Thank you"],
    correct: "See you later"
  },
  {
    text: "Which word is an animal?",
    options: ["Table", "Cat", "Chair", "House"],
    correct: "Cat"
  },
  {
    text: "What is the present tense of 'ran'?",
    options: ["Run", "Running", "Runs", "Ran"],
    correct: "Run"
  },
  {
    text: "How do you ask for the price of something?",
    options: ["How many is it?", "How cost is it?", "How much is it?", "What price is it?"],
    correct: "How much is it?"
  },
  {
    text: "Which sentence uses the correct article?",
    options: ["I have apple", "I have a apple", "I have an apple", "I have the apple"],
    correct: "I have an apple"
  },
  {
    text: "What does 'please' indicate?",
    options: ["A polite request", "Gratitude", "Greeting", "Farewell"],
    correct: "A polite request"
  },
  {
    text: "What is the comparative form of 'fast'?",
    options: ["More fast", "Fastest", "Faster", "Most fast"],
    correct: "Faster"
  },
  {
    text: "How do you order food at a restaurant?",
    options: ["I want pizza", "Give me pizza", "I would like pizza, please", "Pizza now"],
    correct: "I would like pizza, please"
  },
  {
    text: "Which word is a family member?",
    options: ["Teacher", "Doctor", "Mother", "Friend"],
    correct: "Mother"
  },
  {
    text: "What is the correct question form?",
    options: ["You like pizza?", "Do you like pizza?", "Like you pizza?", "Are you like pizza?"],
    correct: "Do you like pizza?"
  },
  {
    text: "How do you say 'desculpe' when you bump into someone?",
    options: ["Thank you", "Sorry", "Hello", "Goodbye"],
    correct: "Sorry"
  },
  {
    text: "What is the past tense of 'eat'?",
    options: ["Eated", "Ate", "Eaten", "Eating"],
    correct: "Ate"
  },
  {
    text: "Which sentence is a question?",
    options: ["Where is the bathroom", "The bathroom is here", "Bathroom there", "Go to bathroom"],
    correct: "Where is the bathroom"
  },
  {
    text: "What does 'I'm fine' mean?",
    options: ["I'm sick", "I'm sad", "I'm okay", "I'm tired"],
    correct: "I'm okay"
  },
  {
    text: "How do you say the number 15 in English?",
    options: ["Fifty", "Fiveteen", "Fifteen", "Fiftyteen"],
    correct: "Fifteen"
  },
  {
    text: "Which word is a profession?",
    options: ["Happy", "Teacher", "Red", "Fast"],
    correct: "Teacher"
  },
  {
    text: "What is the negative form of 'I like coffee'?",
    options: ["I not like coffee", "I don't like coffee", "I doesn't like coffee", "I no like coffee"],
    correct: "I don't like coffee"
  },
  {
    text: "How do you ask where someone is from?",
    options: ["Where you from?", "Where are you from?", "From where you are?", "Where do you from?"],
    correct: "Where are you from?"
  },
  {
    text: "What does 'How old are you?' ask?",
    options: ["Your name", "Your age", "Your location", "Your job"],
    correct: "Your age"
  },
  {
    text: "Which sentence is correct?",
    options: ["They is happy", "They are happy", "They am happy", "They be happy"],
    correct: "They are happy"
  },
  {
    text: "How do you say 'por favor' in English?",
    options: ["Thank you", "Sorry", "Please", "You're welcome"],
    correct: "Please"
  },
  {
    text: "What is the superlative form of 'good'?",
    options: ["Gooder", "More good", "Best", "Better"],
    correct: "Best"
  },
  {
    text: "Which word is a day of the week?",
    options: ["January", "Monday", "Summer", "Morning"],
    correct: "Monday"
  },
  {
    text: "How do you ask for help?",
    options: ["Can you help me, please?", "Help me now", "I need help", "Give me help"],
    correct: "Can you help me, please?"
  },
  {
    text: "What is the present continuous of 'swim'?",
    options: ["Swim", "Swims", "Swimming", "Swam"],
    correct: "Swimming"
  },
  {
    text: "What does 'you're welcome' mean?",
    options: ["Thank you", "Response to thank you", "Hello", "Goodbye"],
    correct: "Response to thank you"
  },
  {
    text: "Which sentence uses the correct preposition?",
    options: ["I live in London", "I live at London", "I live on London", "I live to London"],
    correct: "I live in London"
  },
  {
    text: "How do you say 'com licença' to pass through?",
    options: ["Sorry", "Thank you", "Excuse me", "Please"],
    correct: "Excuse me"
  },
  {
    text: "What is the past tense of 'buy'?",
    options: ["Buyed", "Bought", "Brought", "Buy"],
    correct: "Bought"
  },
  {
    text: "Which word is a feeling?",
    options: ["Table", "Car", "Happy", "School"],
    correct: "Happy"
  },
  {
    text: "How do you offer something to someone?",
    options: ["You want this?", "Would you like some coffee?", "Take this", "Here"],
    correct: "Would you like some coffee?"
  },
  {
    text: "What is the correct form for the third person singular?",
    options: ["He play soccer", "He plays soccer", "He playing soccer", "He are play soccer"],
    correct: "He plays soccer"
  },
  {
    text: "How do you say 'bom apetite' in English?",
    options: ["Good food", "Enjoy your meal", "Delicious", "Let's eat"],
    correct: "Enjoy your meal"
  },
  {
    text: "What is the opposite of 'hot'?",
    options: ["Warm", "Cold", "Cool", "Icy"],
    correct: "Cold"
  },
  {
    text: "Which sentence is correct?",
    options: ["I have 20 years", "I am 20 years old", "I have 20 years old", "I am 20 years"],
    correct: "I am 20 years old"
  },
  {
    text: "How do you ask about the weather?",
    options: ["How is the weather?", "What weather is it?", "How many weather?", "Is it weather?"],
    correct: "How is the weather?"
  },
  {
    text: "What is the contraction of 'I am'?",
    options: ["Im", "I'am", "I'm", "Am I"],
    correct: "I'm"
  }
];
export default level1Questions;