/**
 * @copyright (c)2020
 * @author AndyLau <373804860@qq.com>
 * @package com.diansan.d3
 * @version V1.0.11
 * @date 2020-10-17 16:16
 */
import Vue from 'vue'
import UActionSheet from 'uview-ui/components/u-action-sheet/u-action-sheet'
import UAlertTips from 'uview-ui/components/u-alert-tips/u-alert-tips'
import UAvatarCropper from 'uview-ui/components/u-avatar-cropper/u-avatar-cropper'
import UAvatar from 'uview-ui/components/u-avatar/u-avatar'
import UBackTop from 'uview-ui/components/u-back-top/u-back-top'
import UBadge from 'uview-ui/components/u-badge/u-badge'
import UButton from 'uview-ui/components/u-button/u-button'
import UCalendar from 'uview-ui/components/u-calendar/u-calendar'
import UCarKeyboard from 'uview-ui/components/u-car-keyboard/u-car-keyboard'
import UCard from 'uview-ui/components/u-card/u-card'
import UCellGroup from 'uview-ui/components/u-cell-group/u-cell-group'
import UCellItem from 'uview-ui/components/u-cell-item/u-cell-item'
import UCheckboxGroup from 'uview-ui/components/u-checkbox-group/u-checkbox-group'
import UCheckbox from 'uview-ui/components/u-checkbox/u-checkbox'
import UCircleProgress from 'uview-ui/components/u-circle-progress/u-circle-progress'
import UCol from 'uview-ui/components/u-col/u-col'
import UCollapseItem from 'uview-ui/components/u-collapse-item/u-collapse-item'
import UCollapse from 'uview-ui/components/u-collapse/u-collapse'
import UColumnNotice from 'uview-ui/components/u-column-notice/u-column-notice'
import UCountDown from 'uview-ui/components/u-count-down/u-count-down'
import UCountTo from 'uview-ui/components/u-count-to/u-count-to'
import UDivider from 'uview-ui/components/u-divider/u-divider'
import UDropdownItem from 'uview-ui/components/u-dropdown-item/u-dropdown-item'
import UDropdown from 'uview-ui/components/u-dropdown/u-dropdown'
import UEmpty from 'uview-ui/components/u-empty/u-empty'
import UField from 'uview-ui/components/u-field/u-field'
import UFormItem from 'uview-ui/components/u-form-item/u-form-item'
import UForm from 'uview-ui/components/u-form/u-form'
import UFullScreen from 'uview-ui/components/u-full-screen/u-full-screen'
import UGap from 'uview-ui/components/u-gap/u-gap'
import UGridItem from 'uview-ui/components/u-grid-item/u-grid-item'
import UGrid from 'uview-ui/components/u-grid/u-grid'
import UIcon from 'uview-ui/components/u-icon/u-icon'
import UImage from 'uview-ui/components/u-image/u-image'
import UIndexAnchor from 'uview-ui/components/u-index-anchor/u-index-anchor'
import UIndexList from 'uview-ui/components/u-index-list/u-index-list'
import UInput from 'uview-ui/components/u-input/u-input'
import UKeyboard from 'uview-ui/components/u-keyboard/u-keyboard'
import ULazyLoad from 'uview-ui/components/u-lazy-load/u-lazy-load'
import ULineProgress from 'uview-ui/components/u-line-progress/u-line-progress'
import ULine from 'uview-ui/components/u-line/u-line'
import ULink from 'uview-ui/components/u-link/u-link'
import ULoadingPage from 'uview-ui/components/u-loading-page/u-loading-page'
import ULoading from 'uview-ui/components/u-loading/u-loading'
import ULoadmore from 'uview-ui/components/u-loadmore/u-loadmore'
import UMask from 'uview-ui/components/u-mask/u-mask'
import UMessageInput from 'uview-ui/components/u-message-input/u-message-input'
import UModal from 'uview-ui/components/u-modal/u-modal'
import UNavbar from 'uview-ui/components/u-navbar/u-navbar'
import UNoNetwork from 'uview-ui/components/u-no-network/u-no-network'
import UNoticeBar from 'uview-ui/components/u-notice-bar/u-notice-bar'
import UNumberBox from 'uview-ui/components/u-number-box/u-number-box'
import UNumberKeyboard from 'uview-ui/components/u-number-keyboard/u-number-keyboard'
import Trees from 'uview-ui/components/trees/trees'
import UParse from 'uview-ui/components/u-parse/u-parse'
import UPicker from 'uview-ui/components/u-picker/u-picker'
import UPopup from 'uview-ui/components/u-popup/u-popup'
import URadioGroup from 'uview-ui/components/u-radio-group/u-radio-group'
import URadio from 'uview-ui/components/u-radio/u-radio'
import URate from 'uview-ui/components/u-rate/u-rate'
import UReadMore from 'uview-ui/components/u-read-more/u-read-more'
import URowNotice from 'uview-ui/components/u-row-notice/u-row-notice'
import URow from 'uview-ui/components/u-row/u-row'
import USearch from 'uview-ui/components/u-search/u-search'
import USection from 'uview-ui/components/u-section/u-section'
import USelect from 'uview-ui/components/u-select/u-select'
import USkeleton from 'uview-ui/components/u-skeleton/u-skeleton'
import USlider from 'uview-ui/components/u-slider/u-slider'
import USteps from 'uview-ui/components/u-steps/u-steps'
import USticky from 'uview-ui/components/u-sticky/u-sticky'
import USubsection from 'uview-ui/components/u-subsection/u-subsection'
import USwipeAction from 'uview-ui/components/u-swipe-action/u-swipe-action'
import USwiper from 'uview-ui/components/u-swiper/u-swiper'
import USwitch from 'uview-ui/components/u-switch/u-switch'
import UTabbar from 'uview-ui/components/u-tabbar/u-tabbar'
import UTable from 'uview-ui/components/u-table/u-table'
import UTabsSwiper from 'uview-ui/components/u-tabs-swiper/u-tabs-swiper'
import UTabs from 'uview-ui/components/u-tabs/u-tabs'
import UTag from 'uview-ui/components/u-tag/u-tag'
import UTd from 'uview-ui/components/u-td/u-td'
import UTh from 'uview-ui/components/u-th/u-th'
import UTimeLineItem from 'uview-ui/components/u-time-line-item/u-time-line-item'
import UTimeLine from 'uview-ui/components/u-time-line/u-time-line'
import UToast from 'uview-ui/components/u-toast/u-toast'
import UTopTips from 'uview-ui/components/u-top-tips/u-top-tips'
import UTr from 'uview-ui/components/u-tr/u-tr'
import UUpload from 'uview-ui/components/u-upload/u-upload'
import UVerificationCode from 'uview-ui/components/u-verification-code/u-verification-code'
import UWaterfall from 'uview-ui/components/u-waterfall/u-waterfall'


Vue.component('UActionSheet', UActionSheet)
Vue.component('UAlertTips', UAlertTips)
Vue.component('UAvatarCropper', UAvatarCropper)
Vue.component('UAvatar', UAvatar)
Vue.component('UBackTop', UBackTop)
Vue.component('UBadge', UBadge)
Vue.component('UButton', UButton)
Vue.component('UCalendar', UCalendar)
Vue.component('UCarKeyboard', UCarKeyboard)
Vue.component('UCard', UCard)
Vue.component('UCellGroup', UCellGroup)
Vue.component('UCellItem', UCellItem)
Vue.component('UCheckboxGroup', UCheckboxGroup)
Vue.component('UCheckbox', UCheckbox)
Vue.component('UCircleProgress', UCircleProgress)
Vue.component('UCol', UCol)
Vue.component('UCollapseItem', UCollapseItem)
Vue.component('UCollapse', UCollapse)
Vue.component('UColumnNotice', UColumnNotice)
Vue.component('UCountDown', UCountDown)
Vue.component('UCountTo', UCountTo)
Vue.component('UDivider', UDivider)
Vue.component('UDropdownItem', UDropdownItem)
Vue.component('UDropdown', UDropdown)
Vue.component('UEmpty', UEmpty)
Vue.component('UField', UField)
Vue.component('UFormItem', UFormItem)
Vue.component('UForm', UForm)
Vue.component('UFullScreen', UFullScreen)
Vue.component('UGap', UGap)
Vue.component('UGridItem', UGridItem)
Vue.component('UGrid', UGrid)
Vue.component('UIcon', UIcon)
Vue.component('UImage', UImage)
Vue.component('UIndexAnchor', UIndexAnchor)
Vue.component('UIndexList', UIndexList)
Vue.component('UInput', UInput)
Vue.component('UKeyboard', UKeyboard)
Vue.component('ULazyLoad', ULazyLoad)
Vue.component('ULineProgress', ULineProgress)
Vue.component('ULine', ULine)
Vue.component('ULink', ULink)
Vue.component('ULoadingPage', ULoadingPage)
Vue.component('ULoading', ULoading)
Vue.component('ULoadmore', ULoadmore)
Vue.component('UMask', UMask)
Vue.component('UMessageInput', UMessageInput)
Vue.component('UModal', UModal)
Vue.component('UNavbar', UNavbar)
Vue.component('UNoNetwork', UNoNetwork)
Vue.component('UNoticeBar', UNoticeBar)
Vue.component('UNumberBox', UNumberBox)
Vue.component('UNumberKeyboard', UNumberKeyboard)
Vue.component('Trees', Trees)
Vue.component('UParse', UParse)
Vue.component('UPicker', UPicker)
Vue.component('UPopup', UPopup)
Vue.component('URadioGroup', URadioGroup)
Vue.component('URadio', URadio)
Vue.component('URate', URate)
Vue.component('UReadMore', UReadMore)
Vue.component('URowNotice', URowNotice)
Vue.component('URow', URow)
Vue.component('USearch', USearch)
Vue.component('USection', USection)
Vue.component('USelect', USelect)
Vue.component('USkeleton', USkeleton)
Vue.component('USlider', USlider)
Vue.component('USteps', USteps)
Vue.component('USticky', USticky)
Vue.component('USubsection', USubsection)
Vue.component('USwipeAction', USwipeAction)
Vue.component('USwiper', USwiper)
Vue.component('USwitch', USwitch)
Vue.component('UTabbar', UTabbar)
Vue.component('UTable', UTable)
Vue.component('UTabsSwiper', UTabsSwiper)
Vue.component('UTabs', UTabs)
Vue.component('UTag', UTag)
Vue.component('UTd', UTd)
Vue.component('UTh', UTh)
Vue.component('UTimeLineItem', UTimeLineItem)
Vue.component('UTimeLine', UTimeLine)
Vue.component('UToast', UToast)
Vue.component('UTopTips', UTopTips)
Vue.component('UTr', UTr)
Vue.component('UUpload', UUpload)
Vue.component('UVerificationCode', UVerificationCode)
Vue.component('UWaterfall', UWaterfall)
