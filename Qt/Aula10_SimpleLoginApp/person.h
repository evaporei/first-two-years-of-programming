#ifndef PERSON_H
#define PERSON_H

#include <QString>

class Person
{
public:
    Person();
    Person(QString username, QString password);
    ~Person();
    QString Person::getUsername();
    QString Person::getPassword();
private:
    QString * username;
    QString * password;
};

#endif // PERSON_H
