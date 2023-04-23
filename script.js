import random
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
def main():
    score = 0
    print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nWelcome to the water use higher or lower game!")
    guess = random.randint(0,len(foods)-1)
    game(guess,score)


def game(compare,score):
    print("--------------------------------------------------")
    print(f"Your score is:{score}\n")
    print("The food is: ", foods[compare])
    print(f"The water usage is: {water[compare]} liters/kg\n")
    guess = random.randint(0,len(foods)-1)
    while (compare == guess):
        guess = random.randint(0,len(foods)-1)
    print(f"Is {foods[guess]} higher or lower in water usage?\n")
    
    answer = input("Enter 'higher' or 'lower': ")

    if answer == "higher":
        
        if water[guess] > water[compare]:
            print("\nCorrect!")
            score += 1
            game(guess,score)
        else:
            print("\nIncorrect!")
            print("The food is: ", foods[guess])
            print(f"The water usage is: {water[guess]} liters/kg")
            print(f"\nYour score was:{score}")
            print("Game Over!")
            restart()
    elif answer == "lower":
        if water[guess] < water[compare]:
            print("\nCorrect!")
            score+= 1
            game(guess,score)
        else:
            print("\nIncorrect!")
            print("\nThe food was: ", foods[guess])
            print("The water usage is: ", water[guess])
            print(f"\nYour score was:{score}")
            print("Game Over!")
            restart()

    else:
        print("\nPlease enter 'higher' or 'lower'")
        game(compare,score)

def restart():
    restart = input("\nWould you like to play again? (y/n): ")
    if restart == "y":
        main()
    elif restart == "n":
        print("Thanks for playing!")
    else:
        print("Please enter 'y' or 'n'")
        restart()

main()
