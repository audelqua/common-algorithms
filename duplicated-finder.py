

listWithDuplicatedItems = [1,2,3,5,2,8,2,4,3,1]

# duplicated finder with n^1 O notation algorithm 

singleElements = []
duplicatedsElements = []
def duplicatorFinder():
    for index, item in enumerate(listWithDuplicatedItems):
        if item not in singleElements: 
            singleElements.append(item)
        else:
            if item not in duplicatedsElements:
                duplicatedsElements.append(item)
duplicatorFinder()

print(duplicatedsElements)