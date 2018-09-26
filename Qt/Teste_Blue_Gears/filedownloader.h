#ifndef FILEDOWNLOADER_H
#define FILEDOWNLOADER_H

#include <QObject>
#include <QNetworkAccessManager>
#include <QNetworkRequest>
#include <QNetworkReply>
#include <QUrl>
#include <QDateTime>
#include <QFile>
#include <QDebug>
#include <QString>

class FileDownloader : public QObject
{
    Q_OBJECT
public:
    explicit FileDownloader(QObject *parent = 0);
    ~FileDownloader();
    void downloadFile(QString path, QString newPath, QString fileName);
    void setNewPath(QString newPath);//apenas foi adicionado por questões de organização
    QString newPath;
signals:

public slots:
    void replyFinished (QNetworkReply * reply);
private:
    QNetworkAccessManager * m_Manager;
};

#endif // FILEDOWNLOADER_H
