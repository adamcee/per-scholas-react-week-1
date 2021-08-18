function hello(name: string, isSunny: boolean) {
  if (!isSunny) {
    return "Hi, " + name;
  }

  return `Hi, ${name}, it is sunny out today!`;
}

console.log(hello("Alice", true));
