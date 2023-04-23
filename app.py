from flask import Flask, render_template, request
import random

app = Flask(__name__)

filename = 'Waterwaste.csv'
Dictionary = {"Chocolate":17196,
"Beef":15415,
"Beer": 74,
"Bio-diesel": 11397,
"Sheep Meat": 10412,
"Pork": 5988,
"Butter": 5553,
"Chicken meat": 4325,
"Cheese": 3178,
"Olives": 3025,
"Rice": 2497,
"Cotton": 2496,
"Tea": 27,
"Pasta (dry)": 1849,
"Bread": 1608,
"Pizza": 1239,
"Apple": 822,
"Banana": 790,
"Potatoes": 287,
"Milk": 255,
"Cabbage": 237,
"Tomato": 214,
"Egg": 196,
"Wine": 109,
"Beer": 74,
"Tea": 27
}
foods = list(Dictionary.keys())
water = list(Dictionary.values())

def game(compare,score):
    food = foods[compare]
    water_usage = water[compare]
    guess = random.randint(0,len(foods)-1)
    while (compare == guess):
        guess = random.randint(0,len(foods)-1)
    guess_food = foods[guess]
    guess_water_usage = water[guess]
    return render_template('game.html', food=food, water_usage=water_usage, guess_food=guess_food, guess_water_usage=guess_water_usage, score=score)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def play():
    compare = int(request.form['compare'])
    score = int(request.form['score'])
    answer = request.form['answer']
    if answer == "higher":
        if water[compare] < water[int(request.form['guess'])]:
            score += 1
    elif answer == "lower":
        if water[compare] > water[int(request.form['guess'])]:
            score += 1
    compare = random.randint(0,len(foods)-1)
    return game(compare, score)

if __name__ == '__main__':
    app.run(debug=True)
