//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Singleton, SingletonError, GlobalGuidGenerator,
        GuidGenerator} from "jec-commons";
import { JarsMockContextManager } from "./jcad/JarsMockContextManager";

/**
 * A singleton that allows to manage contexts for Unit Testing of JARS
 * resources. 
 */
export class JarsMock implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JarsMock</code> instance.
   */
  constructor() {
    if(JarsMock._locked || JarsMock.INSTANCE) {
      throw new SingletonError(JarsMock);
    }
    JarsMock._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>JarsMock</code> singleton instance reference.
   */
  private static INSTANCE:JarsMock = null;

  /**
   * Prevents <code>JarsMock</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>JarsMock</code> singleton.
   *
   * @return {JarsMock} a reference to the 
   *                             <code>JarsMock<code> singleton.
   */
  public static getInstance():JarsMock{
    if(JarsMock.INSTANCE === null) {
      JarsMock._locked = false;
      JarsMock.INSTANCE = new JarsMock();
    }
    return JarsMock.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID for this singleton.
   */
  private _id:string = null;

  /**
   * The context manager for this singleton.
   */
  private _contextManager:JarsMockContextManager = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
    this._contextManager = new JarsMockContextManager();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new MOCK context for testing JARS resources.
   */
  public createContext():void {
    this._contextManager.createContext();
  }
  
  /**
   * Disposes an existing JARS MOCK context.
   */
  public deleteContext():void {
    this._contextManager.deleteContext();
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}