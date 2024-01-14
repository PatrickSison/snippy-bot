from train.bot import Bot
import time

snippyBot = Bot()

while True:
  snippyBot.listen()

  snippyBot.say("poop")
  time.sleep(5)
