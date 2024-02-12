/* eslint-disable prettier/prettier */
import {useCallback, useEffect, useRef, useState} from 'react';
import {getChunks} from './getChunks';

export const useChunkData = () => {
  const [data, setData] = useState<Array<{isLatex:boolean, text: string,isImage: boolean}>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const currentText = useRef<string>('');
  const intervalId=useRef<number | null>(null)


  const stopQueryingData=useCallback(() =>{
    if(intervalId.current)
      clearInterval(intervalId.current)
  },[])

  const startQueringData=useCallback(() =>{
    setInterval(() =>{
      setLoading(true);
      const chunkData = getChunks()

      if (chunkData === null){
        setLoading(false);
        stopQueryingData()
        return 
      }

      const {chunk,latex, image}=chunkData
      if(latex || image){
        setData((state) => [...state, {
          isLatex: false, text: currentText.current, isImage: false
        }, {
          isLatex: latex, text:chunk, isImage: image ?? false
        }])

        currentText.current=''
      }else{
        currentText.current = currentText.current.concat(chunk);
      }
    },1000)
  },[stopQueryingData])


  useEffect(() => {
    const id = setInterval(() => {
      
    }, 100);

    return () => clearInterval(id);
  }, []);

  return {data, isLoading, startQueringData};
};
