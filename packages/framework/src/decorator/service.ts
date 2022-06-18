export function Service(): ClassDecorator {
  return (target: object) => {
    console.log(target);
  };
}
