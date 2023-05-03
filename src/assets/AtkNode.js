//Attacker Node
import { NodeBuilder } from '@baklavajs/core'

export const AtkNode = new NodeBuilder('AtkNode')
    //노드 이름 설정
    .setName('Attacker')
    //노트 인풋 연결 Interface
    .addInputInterface('InputNode')
    .addOption('Attacker Name', 'InputOption')
    .addOption('Date', 'InputOption')
    .addOutputInterface('OutputNode')
    .build()


