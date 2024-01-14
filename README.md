# snippy-bot

SNIP discord bot

# Goals

## Input Methods

- Speech to text (via discord)
- Reading screen

## Models/Systems

- LLM
  - Text and image in, text out
  - TODO: Figure out when to take in input and when to generate output based on that
- Action/Decision Model
  - Would be cool to be generative, but likely would need to make decision manually
  - Would need to generate model on ideal actions and decisions to take, likely saying something, screen interaction, or some combination of the 2 depending on how the bot will be configured

## Output

- Text to Speech
  - Could use Azure Speech (similar to how Neuro Sama works currently)
  - TODO: Would need filtering on output
- Screen interaction
  - TODO: Figure out how this would even work
  - Keyboard input
  - Mouse movement and clicking
- Movement of Live2d Model
  - TODO: Figure out how this would even work
  - May need to be secondary layer based on speech and general actions available
