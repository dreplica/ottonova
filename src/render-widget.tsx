import React from 'react'
import { WidgetType } from './types/enums';

const ChatWidget = React.lazy(()=>import('./widgets/chat'))
const MapWidget = React.lazy(()=>import('./widgets/map'))
const RateWidget = React.lazy(()=>import('./widgets/rate'))

interface iProps{
     widget: HTMLDivElement
}

function Render({widget}: iProps) {
    const element = React.useMemo(()=>{
        return widget
    },[widget])
    console.log(element.dataset.widget)
    const RenderComponent = function(){switch (element.dataset.widget) {
        case WidgetType.CHAT:
            return <ChatWidget element={element}/>;
        case WidgetType.MAP:
            return <MapWidget element={element}/>;
        case WidgetType.RATE:
            return <RateWidget element={element}/>;
        default:
            return <></>;
    }
}
    return <React.Suspense fallback={()=>'loading...'}>
        {RenderComponent()}
    </React.Suspense>
        
}

export default Render
