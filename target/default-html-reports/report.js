$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api.feature");
formatter.feature({
  "name": "Verify the api response is correct",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "name": "send the request and check the \"\u003cinformation\u003e\" is correct for products with installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installment1"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.step({
  "name": "I check that the \"\u003cinformation\u003e\" for products with installment option",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "information"
      ]
    },
    {
      "cells": [
        "installment"
      ]
    },
    {
      "cells": [
        "installmentText"
      ]
    },
    {
      "cells": [
        "productGroupIds"
      ]
    }
  ]
});
formatter.scenario({
  "name": "send the request and check the \"installment\" is correct for products with installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment1"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"installment\" for products with installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_with_installment_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "send the request and check the \"installmentText\" is correct for products with installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment1"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"installmentText\" for products with installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_with_installment_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "send the request and check the \"productGroupIds\" is correct for products with installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment1"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"productGroupIds\" for products with installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_with_installment_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "send the request and check the \"\u003cinformation\u003e\" is correct for products without installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installment2"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.step({
  "name": "I check that the \"\u003cinformation\u003e\" for products without installment option",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "information"
      ]
    },
    {
      "cells": [
        "installment"
      ]
    },
    {
      "cells": [
        "installmentText"
      ]
    },
    {
      "cells": [
        "productGroupIds"
      ]
    }
  ]
});
formatter.scenario({
  "name": "send the request and check the \"installment\" is correct for products without installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment2"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"installment\" for products without installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(ApiStepDefs.java:123)\n\tat ✽.I check that the \"installment\" for products without installment option(file:///Users/ahmetvurdem/IdeaProjects/CicekSepetiTask/src/test/resources/features/api.feature:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "send the request and check the \"installmentText\" is correct for products without installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment2"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"installmentText\" for products without installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[6 x 11,66 TL Taksit Seçeneği]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(ApiStepDefs.java:134)\n\tat ✽.I check that the \"installmentText\" for products without installment option(file:///Users/ahmetvurdem/IdeaProjects/CicekSepetiTask/src/test/resources/features/api.feature:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "send the request and check the \"productGroupIds\" is correct for products without installment option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installment2"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the \"productGroupIds\" for products without installment option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c2.0\u003e but was:\u003c1.0\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_for_products_without_installment_option(ApiStepDefs.java:145)\n\tat ✽.I check that the \"productGroupIds\" for products without installment option(file:///Users/ahmetvurdem/IdeaProjects/CicekSepetiTask/src/test/resources/features/api.feature:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "send the request and check the body has null value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@installments"
    },
    {
      "name": "@api"
    },
    {
      "name": "@all"
    },
    {
      "name": "@installmentNull"
    }
  ]
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type is should be json",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.content_type_is_should_be_json()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check that the body has null value",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.ApiStepDefs.i_check_that_the_body_has_null_value()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User try to login with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user inputs \"\u003cemail\u003e\" into email box",
  "keyword": "When "
});
formatter.step({
  "name": "the user inputs \"\u003cpassword\u003e\" into password box",
  "keyword": "And "
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "valid@email.com",
        "valid"
      ]
    },
    {
      "cells": [
        "valid@email.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "valid"
      ]
    },
    {
      "cells": [
        "@invalidEmail",
        "valid"
      ]
    },
    {
      "cells": [
        "\u0027\\;[];@123.co.uk",
        "valid"
      ]
    },
    {
      "cells": [
        "1232683o289287!4@.net",
        "valid"
      ]
    },
    {
      "cells": [
        "valid@email.com",
        "a"
      ]
    },
    {
      "cells": [
        "valid@email.com",
        "moreThan20characterForPassword"
      ]
    },
    {
      "cells": [
        "MoreThanHundredCharacterGazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazq@c.com",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"valid@email.com\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"valid\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"valid@email.com\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"valid\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"@invalidEmail\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"valid\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"\u0027\\;[];@123.co.uk\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"valid\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"1232683o289287!4@.net\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"valid\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"valid@email.com\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"a\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"valid@email.com\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"moreThan20characterForPassword\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "(Negative) Using invalid credentials to sign in",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI"
    },
    {
      "name": "@all"
    }
  ]
});
formatter.step({
  "name": "the user inputs \"MoreThanHundredCharacterGazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazqazq@c.com\" into email box",
  "keyword": "When "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs \"\" into password box",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_inputs_into_password_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cicekSepeti.step_definitions.LoginStepDefs.the_user_should_see_the_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});