# Bamazon

In this project, I created an Amazon-like storefront using SequelPro, Node.js, & Inquirer. The app takes in orders from customers and depletes stock from the store's inventory. when you sign in, the prompt will ask you to enter the item you would like to buy, and how many units. if the item is in stock, it will display to amount of money you need to "pay". if you select the any number 0 or less itll tell you to enter a vaild number. see some image examples below. 


![loading table](https://user-images.githubusercontent.com/33919280/40264728-7633f33c-5af0-11e8-8dd5-490dbfdf7079.png)

# here it is prompting the user to enter an item ID, and how many they would like to buy.
![working with table](https://user-images.githubusercontent.com/33919280/40264744-ac844374-5af0-11e8-994e-7a028c59673f.png)
# notice line 2 - bathing suit is at 300 units
![working with table before](https://user-images.githubusercontent.com/33919280/40264746-affe3816-5af0-11e8-9864-672ba568e42f.png)
# now line 2 has decreased to 299 units
![working with table after](https://user-images.githubusercontent.com/33919280/40264747-b6bd79d2-5af0-11e8-9529-273d745a3966.png)
# if you enter an item id that does exsist, it gives you this error.
![error worng](https://user-images.githubusercontent.com/33919280/40264870-e40ba18c-5af2-11e8-959f-1cc3ccbe0ca7.png)
# if you enter quantity that is exceeds the inventory, it gives you this error, and asks you to enter a new amounts or a different item id all together.
![notworking](https://user-images.githubusercontent.com/33919280/40264885-1766211a-5af3-11e8-8cf4-e6f20e565e40.png)
