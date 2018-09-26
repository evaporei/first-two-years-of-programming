#include "person.h"

Person::Person(QString username, QString password)
{
    this->username = &username;
    this->password = &password;
}



QString Person::getUsername(){
    return (*this->username);
}

QString Person::getPassword(){
    return (*this->password);
}
