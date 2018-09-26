#include "item.h"

Item::Item()
{

}

Item::~Item()
{

}

QByteArray Item::getFoto() const
{
    return this->m_foto;
}

void Item::setFoto(QByteArray foto)
{
    this->m_foto = foto;
}

QString Item::getNome() const
{
    return this->m_nome;
}

void Item::setNome(QString nome)
{
    this->m_nome = nome;
}

QString Item::getDescricao() const
{
    return this->m_descricao;
}

void Item::setDescricao(QString descricao)
{
    this->m_descricao = descricao;
}
