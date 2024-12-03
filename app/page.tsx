"use client";

// import { useState, useEffect } from "react";

import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import {
  FlexifitFeebdack 
 } from '../src/ui-components';
 
 

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      
    });
  }


  return (
    // <main>
      <FlexifitFeebdack />
    // </main>
  );
}
