import AsyncStorage from "@react-native-async-storage/async-storage"

const GROUP_COLLECTION = '@ingnite-teams:groups'

export { GROUP_COLLECTION }

export async function groupGetAll(){
  try{
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
  
    const groups: string[] = storage ? JSON.parse(storage): []

    return groups;
  }catch(error){
    throw error;
  }
}