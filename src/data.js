export const API_KEY = 'AIzaSyDZJ2oMHG6VHLg1GbLLsPa2ta9rMmrO2No';

export const value_convertor = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000) + "K";
    }
    else
    {
        return value;
    }
}