let btn = document.querySelector("#newquote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")
const quotes = [
   
    "The best way to predict the future is to create it. *******    person: Peter Drucker",
   //
    
    "Winners never quit and quitters never win. *******    person: Vince Lombardi",
    
    //
    
    " Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.   *******   person: Steve Jobs",
    
   // 
    
    " My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had person: everyday I'm learning something new. *******        person: Richard Branson",
    
    //
    "Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.   *******        person: Oprah Winfrey",
    
    //
    
 " It’s fine to celebrate success but it is more important to heed the lessons of failure.  *******        person: Bill Gates",
   
   // 
   "  It takes  years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.     *******        person: Warren Buffett",
    
   //
    
    " One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.   *******        person: Jeff Bezos",
    //
    
     " I have not failed. I’ve just found 10,000 ways that won’t work.*******      person: Thomas Edison",
    //
    
    "Logic will get you from A to B. Imagination will take you everywhere.*******     person: Albert Einstein",
    
    //
    
    " As long as you’re going to be thinking anyway, think big.     *******        person: Donald Trump",
    
    //
    
    " Success is walking from failure to failure with no loss of enthusiasm.*******        person: Winston Churchill",
    
    //
    
    "Genius is 1% inspiration, and 99% perspiration.*******        person: Thomas Edison",
    
    //
    
    " Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.       *******        person: Mark Twain",
    
    //
    
    " The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.           *******        person: Vince Lombardi",
    
    //
    
    " If you cannot do great things, do small things in a great way.        *******        person: Napoleon Hill",
    
    //
    
    " I don’t know the key to success, but the key to failure is trying to please everybody.        *******        person: Bill Cosby",
    
    //
    
    " Success is not what you have, but who you are.        *******        person: Bo Bennet",
    
    //
    
    " Entrepreneurship is living a few years of your life like most people won't so you can spend the rest of your life like most people cant.      *******        person: Warren G. Tracy’s student",
    
    //
    
    ". To win without risk is to triumph without glory. *******        person: Corneille",
    
    //
    
    "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.         *******        person: Mark Twain",
    
    //
    
    " There is only one success//person: to be able to spend your life in your own way.               *******        person: Christopher Morley",
    
    //
    
    ". Whatever the mind can conceive and believe, the mind can achieve.        *******        person: Napoleon Hill",
    
    //
    
    " Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.             *******        person: Albert Schweitzer",
    
    //
    
    "What is not started will never get finished            *******        person: Johann Wolfgang von Goethe",
    
    //
    
    " When you cease to dream you cease to live.        *******        person: Malcolm Forbes",
    
    //
    
    " Formal education will make you a living; self//person:education will make you a fortune.            *******        person: Jim Rohn",
    
    //
    
    " The most valuable thing you can make is a mistake//person: you can’t learn anything from being perfect.         *******        person: Adam Osborne",
    
    //
    
    ". A leader is one who knows the way, goes the way, and shows the way.      *******        person: John C. Maxwell",
    
    //
    
    " The function of leadership is to produce more leaders, not more followers.        *******        person: Ralph Nader",
    
    //
    
    " Choose a job that you like, and you will never have to work a day in your life.              *******        person: Confucius",
   //
    
    " Your most unhappy customers are your greatest source of learning.         *******        person: Bill Gates"
    //
    
    ]
 
  btn.addEventListener("click",function(){
        for(i = 0; i < quotes.length; i +=1){
            let random = Math.floor(Math.random()*33)
            quote.textContent = quotes[random]
            person.textContent = person[random]
           }
        
        }
        )









