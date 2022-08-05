# User Story

## AS AN employee with access to sensitive data

-   I WANT to randomly generate a password that meets certain criteria
-   SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password

| WHEN...                                              | THEN...                                                                                      |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| I click the button to generate a password            | I am presented with a series of prompts for password criteria                                |
| prompted for password criteria                       | I select which criteria to include in the password                                           |
| prompted for the length of the password              | I choose a length of at least 8 characters and no more than 128 characters                   |
| asked for character types to include in the password | I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters |
| I answer each prompt                                 | my input should be validated and at least one character type should be selected              |
| all prompts are answered                             | a password is generated that matches the selected criteria                                   |
| the password is generated                            | THEN the password is either displayed in an alert or written to the page                     |

# Password Generator Starter Code

credit:
W3 Schools

Modals:
https://www.w3schools.com/howto/howto_css_modals.asp

Range Sliders:
https://www.w3schools.com/howto/howto_js_rangeslider.asp
