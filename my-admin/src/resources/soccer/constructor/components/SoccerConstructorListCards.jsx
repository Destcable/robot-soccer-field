import IconFile from '../../../../app/icons/file.svg';
import SoccerContructorListCardWrapper from "./SoccerContructorListCardWrapper";

const SoccerConstructorListCards = ({ fields }) => (
    fields.map((field, index) => (
        <SoccerContructorListCardWrapper
            key={index}
            icon={IconFile}
            name={field.name}
        />
    ))
);

export default SoccerConstructorListCards;