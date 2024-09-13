User.create(email: 'andrea@lewagon.com', password: 123456)
User.create(email: 'diego@lewagon.com', password: 123456)

Bill.create

5.times do
  Item.create(
    bill: Bill.last,
    price: rand(50..99)
  )
end
