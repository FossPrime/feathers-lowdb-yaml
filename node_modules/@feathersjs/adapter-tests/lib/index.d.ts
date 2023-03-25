import { AdapterTestName } from './declarations';
declare const adapterTests: (testNames: AdapterTestName[]) => (app: any, errors: any, serviceName: any, idProp?: string) => void;
export * from './declarations';
export default adapterTests;
