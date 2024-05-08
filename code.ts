// A simple decorator
function logg(target:any, key: string, descriptor:PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]){
        console.log(`Calling ${key} with arguments: ${args}`)
        const result = originalMethod.apply(this, args)
        console.log(`Method ${key} executed. Result: ${result}`)
        return result
    }
    return descriptor
  }
  
  class MyClass {
    @logg
    myMethod(param: string) : string{
        return `Hello, ${param!}`
    }
  }
  
  const obj = new MyClass();
console.log(obj.myMethod('World'))