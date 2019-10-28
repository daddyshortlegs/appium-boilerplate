Feature: iOS Login

  Scenario: User is able to login
    Given the following login details
    When the user logs in
    Then they are logged in successfully
