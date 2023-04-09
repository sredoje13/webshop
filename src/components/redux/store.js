import {configureStore} from "@reduxjs/toolkit"
import { serverreducer } from "."
import { byereducer } from "."
export const store=configureStore({
  reducer:{
    Server:serverreducer,
    byeitems:byereducer

  }
})
 
export * from  './reduxthunk'