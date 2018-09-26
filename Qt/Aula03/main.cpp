#include <QApplication>
#include <QLabel>

int main(int argc, char * argv[]){

    QApplication app(argc, argv);

    QLabel * label = new QLabel("Mah label");

    label->setWindowTitle("titleee");
    label->resize(800, 600);
    label->show();


    return app.exec();

}
