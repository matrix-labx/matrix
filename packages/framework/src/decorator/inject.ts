export function Inject(): PropertyDecorator {
  return (target: object, propertyKey: string | symbol) => {
    console.log('PropertyDecorator Inject');
    console.log(target, target.__proto__, propertyKey);
    console.log('\n');
  };
}
