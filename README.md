Çiçek Sepeti UI/API Automation Testing & Instructions
Prepared by:
Ahmet VURDEM

QA Test Automation Engineer

vurdemahmet@gmail.com

https://www.linkedin.com/in/ahmet-vurdem

- Build Tool: Maven

- Test Framework: JUnit

UI Automation Testing:
https://www.lolaflora.com/login

QA:
Generating automation framework for the given task.

System Requirements:

√ Java 13 + SDK

√ Selenium Webdriver

√ Maven

√ JUnit

√ Rest Assured Library

√ Gson

√ Cucumber Reports

****************************************************************

1) Unzip the project

2) Reload maven dependencies from POM

3) Go **src -> test > java > com > cicekSepeti > runners > CukesRunner

4) To generate "Cucumber Report" ;

* Input following maven command to verify and generate report :
    - mvn clean verify

* Finally, to open the report directly in default browser please run:
    - open target/cucumber-html-reports/overview-features.html


The HTML report of the execution is under :  CicekSepetiTask > target/cucumber-html-reports/overview-features.html

****************************************************************

TASK (UI)

1. <http://www.lolaflore.com/login> sitesi üzerinden "Sign in" bölümünde test caseleri (happy/negative) yazıldı, uygulandı.
2. Execution sonucunda Cucumber report create edildi.


TASK (API)

1. <https://www.getpostman.com/collections/5d9f72679607a60f23af> URL üzerinden GET request ile  
   
        - installment 0 olan ürünler
        - installment 1 olan ürünler
        - installment null olan ürünler
test edildi. 

2. Veriler Json formatında RestAssuredLibrary kullanılarak alındı.
3. Gson kullanılarak veriye ulaşılabilecek formata çevirildi. 
4. Execution sonucunda Cucumber report create edildi.
5. Raporda da görüldüğü gibi; taksit seçeneği olmaması gereken ürünlerden bir tanesinde taksit seçeneği bulundu.
6. Bu durum defect olarak değerlendirilebilir.

Not: Taksit seçeneği olmaması gereken ürünlerden bir tanesinde taksit seçeneği vardı. 
Burada error almamak için try-catch block kullanılabilir. Gerekli blok yazılarak commentlendi. 


2021 May®
