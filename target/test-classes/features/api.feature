@installments @api @all
Feature: Verify the api response is correct

# taksit seçeneği olan ürünler için
  @installment1
  Scenario Outline: send the request and check the "<information>" is correct for products with installment option
    When I get the current user information from api
    Then status code should be 200
    And content type is should be json
    Then I check that the "<information>" for products with installment option

    Examples:
      | information     |
      | installment     |
      | installmentText |
      | productGroupIds |


# taksit seçeneği olmayan ürünler için
  @installment2
  Scenario Outline: send the request and check the "<information>" is correct for products without installment option
    When I get the current user information from api
    Then status code should be 200
    And content type is should be json
    Then I check that the "<information>" for products without installment option

    Examples:
      | information     |
      | installment     |
      | installmentText |
      | productGroupIds |


# taksit seçeneği null olan ürünler için
  @installmentNull
  Scenario: send the request and check the body has null value
    When I get the current user information from api
    Then status code should be 200
    And content type is should be json
    Then I check that the body has null value

