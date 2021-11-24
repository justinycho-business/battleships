import random


def get_block_square_positions(currentlyoccupiedpositions):
    positions = []

    square_orientation_dic = [
        "UpperLeft",
        "UpperRight",
        "LowerLeft",
        "LowerRight"
    ]

    block_square_not_positioned = True
    list_of_block_square_indexes = []

    while block_square_not_positioned:
        block_square_not_positioned = False
        square_orietation = random.choice(square_orientation_dic)
        print(square_orietation)

        index_to_start = random.randrange(63)
        print(index_to_start)

        intital_block_position = index_to_start

        currentIdx = intital_block_position

        if square_orietation == "UpperLeft":
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx-8)
            list_of_block_square_indexes.append(currentIdx-9)
            list_of_block_square_indexes.append(currentIdx-1)
        elif square_orietation == "UpperRight":
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx-8)
            list_of_block_square_indexes.append(currentIdx-7)
            list_of_block_square_indexes.append(currentIdx+1)
        elif square_orietation == 'LowerLeft':
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx+8)
            list_of_block_square_indexes.append(currentIdx+7)
            list_of_block_square_indexes.append(currentIdx-1)
        elif square_orietation == 'LowerRight':
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx+8)
            list_of_block_square_indexes.append(currentIdx+9)
            list_of_block_square_indexes.append(currentIdx+1)


        for i in list_of_block_square_indexes:
            if (i > 63) or (i < 0) or (i in currentlyoccupiedpositions):
                block_square_not_positioned = True

        if block_square_not_positioned:
            list_of_block_square_indexes = []


    positions = list_of_block_square_indexes

    return positions


def get_block_L_positions():
    positions = []

    l_orietation_dic = [
        "DownDownLeft", "DownDownRight", "UpUpRight", "UpUpLeft",
        "LeftDownDown", "LeftUpUp", "RightDownDown", "RightUpUp",
        "UpLeftLeft", "UpRightRight", "DownRightRight", "DownLeftLeft",
        "LeftLeftUp", "RightRightUp", "RightRightDown", "LeftLeftDown"
    ]

    block_L_not_positioned = True
    list_of_block_L_indexes = []

    while block_L_not_positioned:
        block_L_not_positioned = False
        l_orietation = random.choice(l_orietation_dic)
        print(l_orietation)

        index_to_start = random.randrange(63)
        print(index_to_start)

        intital_block_L_position = index_to_start

        currentIdx = intital_block_L_position

        if l_orietation == "DownDownLeft":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx-1)
        elif l_orietation == "DownDownRight":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+1)
        elif l_orietation == "UpUpRight":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx+1)
        elif l_orietation == "UpUpLeft":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-1)
        elif l_orietation == "LeftDownDown":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+8)
        elif l_orietation == "LeftUpUp":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-8)
        elif l_orietation == "RightDownDown":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+8)
        elif l_orietation == "RightUpUp":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-8)
        elif l_orietation == "UpLeftLeft":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-1)
        elif l_orietation == "UpRightRight":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-8)
            currentIdx -= 8
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+1)
        elif l_orietation == "DownRightRight":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+1)
        elif l_orietation == "DownLeftLeft":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+8)
            currentIdx += 8
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-1)
        elif l_orietation == "LeftLeftUp":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-8)
        elif l_orietation == "RightRightUp":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx-8)
        elif l_orietation == "RightRightDown":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+1)
            currentIdx += 1
            list_of_block_L_indexes.append(currentIdx+8)
        elif l_orietation == "LeftLeftDown":
            list_of_block_L_indexes.append(currentIdx)
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx-1)
            currentIdx -= 1
            list_of_block_L_indexes.append(currentIdx+8)

        for i in list_of_block_L_indexes:
            if i > 63 or i < 0:
                block_L_not_positioned = True

        if block_L_not_positioned:
            list_of_block_L_indexes = []

    positions = list_of_block_L_indexes

    return positions




def get_random_positions_for_blocks():
    allpositions = []

    dic_of_positions = {}

    for i in get_block_L_positions():
        allpositions.append(i)
        dic_of_positions[i] = i

    for j in get_block_square_positions(dic_of_positions):
        allpositions.append(j)
        dic_of_positions[j] = j

    for x in get_block_line_positions(dic_of_positions):
        allpositions.append(x)
        dic_of_positions[x] = x

    for z in get_block_line_positions(dic_of_positions):
        allpositions.append(z)
        dic_of_positions[z] = z


    return allpositions



def get_block_line_positions(currentlyoccupiedpositions):
    positions = []

    line_orientation_dic = [
        "Up",
        "Down",
        "Left",
        "Right"
    ]

    block_line_not_positioned = True
    list_of_block_square_indexes = []

    while block_line_not_positioned:
        block_line_not_positioned = False
        line_orietation = random.choice(line_orientation_dic)
        print(line_orietation)

        index_to_start = random.randrange(63)
        print(index_to_start)

        intital_block_position = index_to_start

        currentIdx = intital_block_position

        if line_orietation == "Up":
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx-8)
            list_of_block_square_indexes.append(currentIdx-16)
            list_of_block_square_indexes.append(currentIdx-24)
        elif line_orietation == "Down":
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx+8)
            list_of_block_square_indexes.append(currentIdx+16)
            list_of_block_square_indexes.append(currentIdx+24)
        elif line_orietation == 'Left':
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx-1)
            list_of_block_square_indexes.append(currentIdx-2)
            list_of_block_square_indexes.append(currentIdx-3)
        elif line_orietation == 'Right':
            list_of_block_square_indexes.append(currentIdx)
            list_of_block_square_indexes.append(currentIdx+1)
            list_of_block_square_indexes.append(currentIdx+2)
            list_of_block_square_indexes.append(currentIdx+3)


        for i in list_of_block_square_indexes:
            if (i > 63) or (i < 0) or (i in currentlyoccupiedpositions):
                block_line_not_positioned = True

        if block_line_not_positioned:
            list_of_block_square_indexes = []


    positions = list_of_block_square_indexes

    return positions
