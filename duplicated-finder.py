

listWithDuplicatedItems = [1,2,3,5,2,1,8,2,4,3,1]

# duplicated finder with n^2 O notation algorithm 
dupElements = []
def duplicatorFinderBadWay():
    for i in range(len(listWithDuplicatedItems)): 
        for j in range(i):
            if listWithDuplicatedItems[i] == listWithDuplicatedItems[j]:
                if listWithDuplicatedItems[i] not in dupElements:
                    dupElements.append(listWithDuplicatedItems[i])

            
duplicatorFinderBadWay()
print(dupElements)

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