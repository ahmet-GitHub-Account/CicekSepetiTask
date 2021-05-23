@UI @all
Feature: User try to login with invalid credentials

  Background:
    Given the user is on the login page

  Scenario Outline: (Negative) Using invalid credentials to sign in
    When the user inputs "<email>" into email box
    And the user inputs "<password>" into password box
    And the user click on the sign in button
    Then the user should see the warning message
    Examples:
      | email                                                                                                                                                                                                                                                                                       | password                       |
      | valid@email.com                                                                                                                                                                                                                                                                             | valid                          |
      | valid@email.com                                                                                                                                                                                                                                                                             |                                |
      |                                                                                                                                                                                                                                                                                             | valid                          |
      | @invalidEmail                                                                                                                                                                                                                                                                               | valid                          |
      | '\;[];@123.co.uk                                                                                                                                                                                                                                                                            | valid                          |
      | 1232683o289287!4@.net                                                                                                                                                                                                                                                                       | valid                          |
      | valid@email.com                                                                                                                                                                                                                                                                             | a                              |
      | valid@email.com                                                                                                                                                                                                                                                                             | moreThan20characterForPassword |
      | MoreThanHundredCharacterGazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazq@c.com |                                |

#    should be tested in a way of equivalence partition technique (if I want to improve my test case)
#    I don't know the acceptance criterias but if I were in this project
#    I probably would suggest to add asterisks for the required fields.