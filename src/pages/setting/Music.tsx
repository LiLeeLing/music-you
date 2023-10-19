import Col from '@/components/Col'
import { QUALITY_LEVEL, useSettingStore } from '@/store/setting'
import SelectMenu from '@/components/SelectMenu'

export default function MusicSetting() {
  const { quality, setQuality } = useSettingStore()

  return <div>
    <Col className='mb-4' variant='body2' title='音频' subTitle='首选媒体音频质量' more={
      <SelectMenu value={quality} options={[
        {
          title: '标准',
          value: QUALITY_LEVEL.STANDARD,
        },
        {
          title: '较高',
          value: QUALITY_LEVEL.HIGHER,
        },
        {
          title: '极高(vip)',
          value: QUALITY_LEVEL.EXHIGH,
        },
        {
          title: '无损(vip)',
          value: QUALITY_LEVEL.LOSSLESS,
        },
        {
          title: 'Hi-Res(vip)',
          value: QUALITY_LEVEL.HIRES,
        },
        {
          title: '高清环绕声(vip)',
          value: QUALITY_LEVEL.JYEFFECT,
        },
        {
          title: '沉浸环绕声(vip)',
          value: QUALITY_LEVEL.SKY,
        },
        {
          title: '超清母带(vip)',
          value: QUALITY_LEVEL.JYMASTER,
        },
      ]} onChange={setQuality} />
    }>

    </Col>
  </div>
}