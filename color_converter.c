#include <stdio.h>
union hex
{
  unsigned int hexVal;
  struct component
  {
    unsigned char c1, c2, c3, c4;
  };
};

union box
{
  char color[9]; // 6bytes, 2byte forEach channel!
  struct
  {
    unsigned short r;
    unsigned short g;
    unsigned short b;
    unsigned short a;
  };
};
char *padding(char *a, int len)
{
  char paddedString[7];
  int i = 0;
  while (i < len)
  {
    paddedString[i];
    i++;
  }

  sprintf(paddedString, "%06X", a);
}
int main()
{
  char c[] = {'1', '2', '3', '4'};
  char cp[9] = {'0', '0', '0', '0', '0', '0', '0', '0', '\0'};
  int balance = (sizeof(c) - 4);
  // if balance is not zero we w'll take 2 element from c
  // example if c is 6 then 6 - 3 => 3
  int i = 0;
  int index = 0;
  int prev = 1;
  if (balance >= 0)
  {
    while (i < sizeof(cp) - 1)
    {
      // the balance variable is use to check weather element need to stack!
      if (balance != 0)
      {
        balance--;
        cp[i] = c[index++];
        cp[i + 1] = c[index++];
        i++;
      }
      else
      {
        if (i % 2 != 0)
        {
          cp[i] = c[index];
          index++;
        }
      }
      i++;
    }
    printf("%s\n", cp);
    printf("%d", atoi(cp));
  }
  else
  {
    printf("invalid color");
  }
  // printf("%s", padding("fff", 3));
  // char *c = "fff";
  // union box b = {padding(c)};
  // // need to conver the number to padded string and then we can do that we do!
  return 0;
}