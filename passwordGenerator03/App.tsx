import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number().min(4,'Should be min of 4 characters').max(16,"Should be within 16 characters").required("Length is required")
})

export default function App() {

  const [password,setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowecase, setLowecase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength:number)=>{

  }

  const createPassword = (characters:string,passwordLength:number)=>{
      let result = ''
      for (let index = 0; index < passwordLength; index++) {
        const characterIndex = Math.round(Math.random()* characters.length)
        result += characters.charAt(characterIndex)
        
      }
      return result
  }

  const resetPasswordState = ()=>{

  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})